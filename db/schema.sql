CREATE TABLE employees
(id INT PRIMARY KEY
first_name VARCHAR(30)
last_name VARCHAR(30)
role_id INT,
FOREIGN KEY (role_id) REFERENCES roles(id)
)

CREATE TABLE roles (
    id INT AUTO_INCREMENT PRIMARY KEY
    department VARCHAR(30)
    Salary DECIMAL
    department_id INT
    FOREIGN KEY (department_id) REFERENCES department(id)
)

CREATE TABLE department
(id INT AUTO_INCREMENT PRIMARY KEY
department VARCHAR(30))

