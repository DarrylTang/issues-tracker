import React from "react";

// was quickly created using "rafce" snippet

// we can define an interface (shape) for the user object
interface User {
    id: number;
    name: string;
    email: string;
}

// the name we use here doesnt really matter, its just a name
const UsersPage = async () => {
    // perform a http request to get the users
    // always try to fetch the data from the server
    // the revalidate option will make sure the data is always up to date, fetching new data every 10 seconds, in between that its going to serve the cached data
    const res = await fetch("https://jsonplaceholder.typicode.com/users", {
        next: { revalidate: 10 },
    });
    const users: User[] = await res.json();

    return (
        <>
            <h1>Users:</h1>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
};

export default UsersPage;
