import React, { useReducer, useState } from "react";

/* ✅ 1) initialState: Array of users */
const initialUsers = [
  { id: 1, name: "Ali", age: 25 },
  { id: 2, name: "Sara", age: 30 },
];

/* ✅ 2) reducer: ADD / DELETE / UPDATE */
function reducer(state, action) {
  switch (action.type) {
    case "ADD_USER":
      return [
        ...state,
        {
          id: Date.now(),
          name: action.payload.name,
          age: action.payload.age,
        },
      ];

    case "DELETE_USER":
      return state.filter((user) => user.id !== action.payload);

    case "UPDATE_USER":
      return state.map((user) =>
        user.id === action.payload.id
          ? { ...user, name: action.payload.name, age: action.payload.age }
          : user
      );

    default:
      return state;
  }
}

export default function UseReducer5() {
  const [users, dispatch] = useReducer(reducer, initialUsers);

  /* ✅ local UI state (inputs) */
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  /* ✅ for editing */
  const [editingId, setEditingId] = useState(null);
  const [editName, setEditName] = useState("");
  const [editAge, setEditAge] = useState("");

  /* ADD */
  const handleAdd = () => {
    const trimmed = name.trim();
    const ageNumber = Number(age);

    if (!trimmed) return alert("اكتب الاسم");
    if (!Number.isFinite(ageNumber) || ageNumber <= 0) return alert("اكتب عمر صحيح");

    dispatch({
      type: "ADD_USER",
      payload: { name: trimmed, age: ageNumber },
    });

    setName("");
    setAge("");
  };

  /* DELETE */
  const handleDelete = (id) => {
    dispatch({ type: "DELETE_USER", payload: id });
    if (editingId === id) {
      setEditingId(null);
      setEditName("");
      setEditAge("");
    }
  };

  /* start editing */
  const startEdit = (user) => {
    setEditingId(user.id);
    setEditName(user.name);
    setEditAge(String(user.age));
  };

  /* save update */
  const handleSave = () => {
    const trimmed = editName.trim();
    const ageNumber = Number(editAge);

    if (!trimmed) return alert("اكتب الاسم");
    if (!Number.isFinite(ageNumber) || ageNumber <= 0) return alert("اكتب عمر صحيح");

    dispatch({
      type: "UPDATE_USER",
      payload: { id: editingId, name: trimmed, age: ageNumber },
    });

    setEditingId(null);
    setEditName("");
    setEditAge("");
  };

  /* cancel update */
  const handleCancel = () => {
    setEditingId(null);
    setEditName("");
    setEditAge("");
  };

  return (
    <div style={{ padding: 16 }}>
      <h2>Users CRUD (useReducer)</h2>

      {/* ✅ ADD USER */}
      <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <button onClick={handleAdd}>Add User</button>
      </div>

      <hr />

      {/* ✅ LIST USERS */}
      {users.length === 0 ? (
        <p>No users</p>
      ) : (
        <ul style={{ paddingLeft: 18 }}>
          {users.map((user) => (
            <li key={user.id} style={{ marginBottom: 10 }}>
              {/* إذا هذا المستخدم في وضع التعديل */}
              {editingId === user.id ? (
                <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                  <input
                    value={editName}
                    onChange={(e) => setEditName(e.target.value)}
                  />
                  <input
                    value={editAge}
                    onChange={(e) => setEditAge(e.target.value)}
                  />
                  <button onClick={handleSave}>Save</button>
                  <button onClick={handleCancel}>Cancel</button>
                </div>
              ) : (
                <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                  <span>
                    <b>{user.name}</b> — Age: {user.age}
                  </span>
                  <button onClick={() => startEdit(user)}>Edit</button>
                  <button onClick={() => handleDelete(user.id)}>Delete</button>
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
