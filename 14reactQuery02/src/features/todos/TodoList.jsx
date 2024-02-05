import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faUpload } from "@fortawesome/free-solid-svg-icons";

import { useQuery, useMutation, useQueryClient } from "react-query";
import { getTodos, addTodo, updateTodo, deleteTodo } from "../../api/todosApi";

export default function TodoList() {
  const [newTodos, setNewTodos] = useState("");

  const queryClient = useQueryClient();

  const { isLoading, isError, error } = useQuery("todos", getTodos);

  const addTodoMutation = useMutation(addTodo, {
    onSuccess: () => {
      // invalid cache and refetch
      queryClient.invalidateQueries("todos");
    },
  });

  const updateTodotation = useMutation(updateTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });

  const deleteTodoMutation = useMutation(deleteTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries('todos')
    },
  });

  const handleSumbit=(e)=>{
    e.preventDefault();
    addTodoMutation.mutate({userId:1,title:'newTodo',completed:false})
    setNewTodos('')
    addTodo
  }

}
