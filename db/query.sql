SELECT
 roles.roles_id AS id, departments.department_id AS department_id 
 FROM roles
 LEFT JOIN department_id on roles.department_id