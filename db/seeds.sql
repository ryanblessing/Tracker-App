INSERT INTO departments(id, name)
VALUES
(1, 'sales'),
(2, 'development');


INSERT INTO roles(role_id, title, salary, department_id)
VALUES
(1, ' Sales Manager', '65', 1),
(2, 'sales associate', '45', 1),
(3, 'Development Manager', '65', 2),
(4, 'development engineer', '60', 2);

INSERT INTO managers(first_name, last_name, roles_id)
VALUES
('Rick', 'James', 1),
('Kevin', 'Spacey', 1),
('Wayne', 'Gretzkey', 3),
('Kid', 'Rock', 3);

INSERT INTO employees(first_name, last_name, roles_id)
VALUES
('Patrick', 'Swayze', 2),
('Jim', 'Carey', 2),
('Brett', 'Farve', 2),
('Golden', 'Tate', 2),
('Bob', 'Hope', 4),
('Connor', 'Mcgregor', 4),
('Joe', 'Rogan', 4),
('Tim', 'Scott', 4);
