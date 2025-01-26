import React, {useEffect, useState} from 'react';
import axiosInstance from '../api/axiosinstance';

const Users = () => {
 const [users, setUsers] = useState([]);
 const [loading, setloading] = useState(true);

 useEffect(() => {
    const fetchUsers = async () => {
        try {
            const response = await axiosInstance.get('/users');
            setUsers(response.data);
        } catch (error) {
            console.error('Ошибка загрузки пользователей:', error);
        } finally {
            setloading(false);
        }
    };

    fetchUsers();
 }, []);

 if (loading) return <div>Загрузка...</div>;

 return (
    <div>
        <h1>Список пользователей</h1>
        <ul>
            {users.map((user) => (
                <li key={user.id}>
                 {user.name} ({user.email})
                </li>
            ))}
        </ul>
    </div>
 );
};  

export default Users;