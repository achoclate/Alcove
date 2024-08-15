import React, { useState } from 'react';
import { Container, Card, Button, Form } from 'react-bootstrap';
import './UserProfile.css'; // Import the CSS file

const UserProfile = ({ user, onLogout }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    username: user?.username || '',
    email: user?.email || '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    // Placeholder for save logic (e.g., API call)
    console.log('Saved data:', formData);
    setIsEditing(false);
  };

  return (
    <Container className="profile-container mt-5">
      <Card className="profile-card">
        <Card.Body>
          <Card.Title className="profile-card-title">User Profile</Card.Title>
          {user ? (
            <>
              {isEditing ? (
                <Form>
                  <Form.Group controlId="formUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                      type="text"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Button variant="primary" onClick={handleSave}>
                    Save
                  </Button>
                  <Button
                    variant="secondary"
                    className="ms-2"
                    onClick={() => setIsEditing(false)}
                  >
                    Cancel
                  </Button>
                </Form>
              ) : (
                <>
                  <Card.Text className="profile-card-text">
                    <strong>Username:</strong> {user.username}
                  </Card.Text>
                  <Card.Text className="profile-card-text">
                    <strong>Email:</strong> {user.email}
                  </Card.Text>
                  <Button
                    variant="secondary"
                    onClick={() => setIsEditing(true)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="primary"
                    className="ms-2"
                    onClick={onLogout}
                  >
                    Logout
                  </Button>
                </>
              )}
            </>
          ) : (
            <Card.Text className="profile-card-text">
              Please log in to view your profile.
            </Card.Text>
          )}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default UserProfile;
