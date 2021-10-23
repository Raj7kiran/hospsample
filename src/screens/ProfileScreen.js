import React from 'react'
import { Button, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ProfileScreen = () => {
	return (
		<>
			<Row className='align-items-center'>
				<Col>
					<h1>Profile</h1>
				</Col>
				<Col className='text-right my-3'>
					<Link className='btn btn-primary' to='/updateprofile'>Update Profile</Link>
				</Col>
			</Row>
					
         </>
		)
}

export default ProfileScreen