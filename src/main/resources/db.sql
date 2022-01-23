select * from users;
insert into users(name, email, address)
values ('aman','aman@gmail.d', 'Narimanova42'),
       ('sana', 'sana@dsh', 'Asan');


select * from roles;
insert into roles (role)
values ('ROLE_USER'),
       ('ROLE_ADMIN');

select * from user_roles;
insert into user_roles(user_id, role_id)
values (3,2),
       (4,2);



