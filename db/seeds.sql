INSERT INTO departments(department_name)
VALUES
('Sales'),
('Development');

INSERT INTO roles(title, salary, department_id)
VALUES
('Sales Manager', '65', 1),
('sales associate', '45', 1),
('Development Manager', '65', 2),
('Development Engineer', '60', 2);


INSERT INTO employees(first_name, last_name, role_id, manager_id)
VALUES
('Rick', 'James', 1, NULL),
('Kevin', 'Spacey', 1, NULL),
('Wayne', 'Gretzkey', 3, NULL),
('Kid', 'Rock', 3, NULL),
('Patrick', 'Swayze', 2, 1),
('Jim', 'Carey', 2, 1),
('Brett', 'Farve', 2, 2),
('Golden', 'Tate', 2, 2),
('Bob', 'Hope', 4, 3),
('Connor', 'Mcgregor', 4, 3),
('Joe', 'Rogan', 4, 4),
('Tim', 'Scott', 4, 4);


