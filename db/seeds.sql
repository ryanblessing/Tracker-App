INSERT INTO departments(id, name)
VALUES
(1, 'Sales'),
(2, 'Development');


INSERT INTO roles(roles_id, title, salary, department_id)
VALUES
('Sales Manager', '65', 1),
('sales associate', '45', 1),
('Development Manager', '65', 2),
('Development Engineer', '60', 2);

INSERT INTO managers( manager_id, first_name, last_name, roles_id)
VALUES
('Rick', 'James', 1),
('Kevin', 'Spacey', 1),
('Wayne', 'Gretzkey', 3),
('Kid', 'Rock', 3);

INSERT INTO employees(first_name, last_name, roles_id, manager_id)
VALUES
('Patrick', 'Swayze', 2, 1),
('Jim', 'Carey', 2, 1),
('Brett', 'Farve', 2, 2),
('Golden', 'Tate', 2, 2),
('Bob', 'Hope', 4, 3),
('Connor', 'Mcgregor', 4, 3),
('Joe', 'Rogan', 4, 4),
('Tim', 'Scott', 4, 4);
