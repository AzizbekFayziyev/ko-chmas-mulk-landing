import { onValue, ref, remove, update } from "firebase/database";
import React, { useEffect, useState } from "react";
import { db } from "./firebase";

const App = () => {
  const [users, setUsers] = useState([]);
  const [showNotCompeled, setShowNotCompleted] = useState(false);
  const filteredUsers = users.filter((user) => user.isCompleted == false);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggined, setIsLoggined] = useState(false);
  const [isLoading, setLoading] = useState(false);

  // read
  useEffect(() => {
    const savedLogin = localStorage.getItem("isLoggined");

    if (savedLogin) {
      setIsLoggined(true);
    }

    const fetchData = async () => {
      try {
        setLoading(true);

        const dataRef = ref(db);

        onValue(dataRef, (snapshot) => {
          const data = snapshot.val();
          if (data !== null) {
            const dataArray = Object.values(data);

            dataArray.sort((a, b) => b.timestamp - a.timestamp);

            setUsers(dataArray);
            setLoading(false);
          } else {
            setUsers([]);
            setLoading(false);
          }
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // delete
  const handleDelete = (user) => {
    const areYouSure = confirm(user.name + " ni ro'yxatdan o'chirmoqchimisiz?");

    if (areYouSure) {
      remove(ref(db, `/${user.id}`));
    }
  };

  // update
  const onCompleted = (user) => {
    update(ref(db, `/${user.id}`), {
      isCompleted: !user.isCompleted,
    });
  };

  // onSubmit
  const onSubmit = (e) => {
    e.preventDefault();

    if (
      login.toLowerCase() == "khusniddin" &&
      password.toLowerCase() == "realtor"
    ) {
      setIsLoggined(true);
      localStorage.setItem("isLoggined", true);
    } else {
      alert("Login yoki parol no to'g'ri!");
      setPassword("");
      setLogin("");
    }
  };

  return (
    <div>
      <h1>ADMIN PANEL - Khusniddin Realtor</h1>

      {!isLoggined && (
        <form
          onSubmit={onSubmit}
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
            background: "#fff",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h3>LOGIN VA PAROLNI KIRITING!</h3>

          <input
            className="form-control"
            style={{ padding: 10, margin: "10px 0", maxWidth: 300 }}
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            type="text"
            placeholder="LOGIN"
          />
          <input
            className="form-control"
            style={{ padding: 10, margin: "10px 0", maxWidth: 300 }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="text"
            placeholder="PAROL"
          />
          <button
            className="btn btn-primary btn-lg"
            style={{ padding: 10, cursor: "pointer" }}
            type="submit"
          >
            KIRISH
          </button>
        </form>
      )}

      <div
        style={{
          fontSize: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "8px",
          gap: "8px",
        }}
      >
        <label
          class="form-check-label"
          style={{ cursor: "pointer", userSelect: "none" }}
          htmlFor="show"
        >
          Bajarilmaganlarini ko'rsatish
        </label>
        <input
          className="form-check-input"
          id="show"
          type="checkbox"
          onChange={() => setShowNotCompleted((e) => !e)}
        />
      </div>

      <div
        style={{
          maxWidth: "1400px",
          marginInline: "auto",
          marginTop: "20px",
          overflow: "auto",
        }}
      >
        {!isLoading ? (
          users.length ? (
            <table
              style={{ whiteSpace: "nowrap" }}
              className="table table-hover table-bordered"
            >
              <thead className="text-center">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">№</th>
                  <th scope="col">Ismi</th>
                  <th scope="col">Ariza topshirilgan sana</th>
                  <th scope="col">Telefon raqam</th>
                  <th scope="col">Shtat</th>
                  <th scope="col">Shahar</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                {(showNotCompeled ? filteredUsers : users)
                  .sort((a, b) => b.filteringDate - a.filteringDate)
                  .map((user, id) => (
                    <tr key={user.id} className={user.isCompleted ? "table-primary" : ""}>
                      <th className="text-center">
                        <input
                          className="form-check-input"
                          style={{ marginRight: 0 }}
                          onClick={() => onCompleted(user)}
                          type="checkbox"
                          value={user.isCompleted}
                          defaultChecked={user.isCompleted}
                        />
                      </th>
                      <th scope="row">{id + 1}</th>
                      <td>{user.name}</td>
                      <td>{user.submitedDate}</td>
                      <td>{user.phone}</td>
                      <td>{user.state}</td>
                      <td>
                        {user.city ? (
                          user.city
                        ) : (
                          <span className="text-danger"> to'ldirilmagan</span>
                        )}
                      </td>
                      <th className="text-center">
                        <button
                          className="btn btn-danger"
                          onClick={() => handleDelete(user)}
                        >
                          O'chirish
                        </button>
                      </th>
                    </tr>
                  ))}
              </tbody>
            </table>
          ) : (
            <h2
              style={{
                textAlign: "center",
                color: "red",
                marginTop: "30px",
              }}
            >
              ARIZA TOPSHIRGANLAR YO'Q!
            </h2>
          )
        ) : (
          <h2
            style={{
              textAlign: "center",
              color: "green",
              marginTop: "30px",
            }}
          >
            YUKLANMOQDA...
          </h2>
        )}
      </div>

      {/* <div className="users">
        {!isLoading ? (
          users.length ? (
            (showNotCompeled ? filteredUsers : users)
              .sort((a, b) => b.filteringDate - a.filteringDate)
              .map((user) => (
                <div
                  className={`user ${
                    user.isCompleted ? "bg-success" : "bg-secondary"
                  }`}
                  key={user.id}
                >
                  <h4>
                    Ism: <i>{user.name}</i>
                  </h4>
                  <h4>
                    Sana: <i>{user.submitedDate}</i>
                  </h4>
                  <h4 style={{ marginTop: 2 }}>
                    Tel: <i>{user.phone}</i>
                  </h4>
                  <h4 style={{ marginTop: 2 }}>
                    Shtat: <i>{user.state}</i>
                  </h4>
                  <h4 style={{ marginTop: 2 }}>
                    Shahar:
                    {user.city ? (
                      <i> {user.city}</i>
                    ) : (
                      <span className="text-danger"> to'ldirilmagan</span>
                    )}
                  </h4>

                  <div className="d-flex justify-content-between align-items-center mt-4">
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(user)}
                    >
                      O'chirish
                    </button>

                    <label
                      style={{ cursor: "pointer" }}
                      htmlFor={user.id}
                      className="form-label mt-1"
                    >
                      <input
                        id={user.id}
                        className="form-check-input"
                        onClick={() => onCompleted(user)}
                        type="checkbox"
                        value={user.isCompleted}
                        defaultChecked={user.isCompleted}
                      />
                      Bajarilgan
                    </label>
                  </div>
                </div>
              ))
          ) : (
            <h2
              style={{ textAlign: "center", color: "red", marginTop: "30px" }}
            >
              ARIZA TOPSHIRGANLAR YO'Q!
            </h2>
          )
        ) : (
          <h2
            style={{ textAlign: "center", color: "green", marginTop: "30px" }}
          >
            YUKLANMOQDA...
          </h2>
        )}
      </div> */}
    </div>
  );
};

export default App;
