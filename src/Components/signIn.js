import React, { useState } from "react";

const SignIn = () => {
  const [name, setName] = useState();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [user, setUser] = useState({});
  const onSubmitHandler = e => {
    e.preventDefault();
    setUser({
      name,
      username,
      email
    });

    setName("");
    setUsername("");
    setEmail("");
  };

  return (
    <div style={{ height: "50vh", padding: "5% 0 0 0" }}>
      <h3>SignIn</h3>
      <form
        onSubmit={onSubmitHandler}
        style={{ display: "inline-block", width: "100%" }}
      >
        <div>
          <label style={{ display: "inline-block", width: "100%" }}>
            name:
          </label>
          <input
            data-testid="name-input"
            type="text"
            name="name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div>
          <label style={{ display: "inline-block", width: "100%" }}>
            UserName:
          </label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label style={{ display: "inline-block", width: "100%" }}>
            Email:
          </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <button
          style={{
            border: "none",
            background: "#c7f78f",
            padding: "1em 1.5em",
            margin: "1em",
            borderRadius: "5%",
            color: " #3e7400"
          }}
          type="submit"
        >
          Add User
        </button>
      </form>
      <div style={{ background: "#f7f596" }}>
        <p role={name}>
          {user.name}
        </p>
        <p>
          {user.email}
        </p>
        <h4>
          {user.username}
        </h4>
      </div>
    </div>
  );
};

export default SignIn;
