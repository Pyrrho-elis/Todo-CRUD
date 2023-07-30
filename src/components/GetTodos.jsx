import db from "../firebase"
import React, {useState, useEffect, useRef} from "react"
import { collection, onSnapshot, addDoc, deleteDoc, doc, query, where, orderBy, serverTimestamp} from "firebase/firestore"
import './comStyle.css'
import { useAuth } from "../firebase"
import { BsFillTrashFill } from 'react-icons/bs'


export default function GetTodos() {
    const [todos, setTodos] = useState([])
    const todoRef = useRef()
    const currentUser = useAuth()

    const showTodo = true
    

    const handleAddTodo = async () => {
      const todo = todoRef.current.value
      const email = currentUser.email

      const collectionRef = collection(db, "allTodos")
      const payload = {user_todo: todo, isDone: false, email: email, createdAt: serverTimestamp()}
      await addDoc(collectionRef, payload).then(
        todoRef.current.value = ""
      )
    }

    const handleDeleteTodo = async (id) => {
      const docRef = doc(db, "allTodos", id)
      await deleteDoc(docRef)
    }

    const colRef = collection(db, "allTodos")

    const qRef = query(colRef, where("email", "==", String(currentUser?.email)), orderBy('createdAt'))

    useEffect(() => {
        onSnapshot(qRef, (snapshot) => setTodos(snapshot.docs.map(doc => ({...doc.data(), id: doc.id}) )))
    }, [currentUser])

  return (
    <div className="todo-container">
      <h2>Todos</h2>
      <div className="addtodos">
        <input type="text" id="add-todo" ref={todoRef} />
        <button className="btn-normal" onClick={handleAddTodo}>Add</button>
      </div>
      {todos.map(todo => (
        <li key={todo.id}>
          <div className="todo-single">
            <p>{todo.user_todo}</p>
            <div className="actions">
              <button id="del" onClick={() => handleDeleteTodo(todo.id)}><BsFillTrashFill style={{color: 'white'}}/></button>
              <input type="checkbox" id="done" />
            </div>
          </div>
        </li>
      ))}
    </div>
  )
}
