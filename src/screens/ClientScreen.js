import React from 'react'
import { Link, LinkContainer } from 'react-router-dom'
import { Table, Button,Row, Col } from 'react-bootstrap'
import users from '../users'


const ClientScreen = () => {
	return (

		<>
			<Row className='align-items-center'>
				<Col>
					<h1>Client List</h1>
				</Col>

				<Col className='text-right my-3'>
					<Link className='btn btn-dark' to='/admin/addusers'>Add User</Link>
				</Col>
			</Row>
			<Table striped bordered hover responsive className='table-sm'>
				<thead>
					<tr>
						<th>Name</th>
						<th>Email</th>
					</tr>
				</thead>
				<tbody>
					{	
						users.map((user) => (
						user.isAdmin ? ' ' : (
								<tr key={user.id}>
									<td>{user.name}</td>
									<td>{user.email}</td>
								</tr>
							)
							
						))}
					
				</tbody>
			</Table>
		</>

		)
}


export default ClientScreen