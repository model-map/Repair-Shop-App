INSERT INTO "Customers" (
    "firstName", "lastName", "email", "phone", "address1", "address2", "state", "zip", "notes", "active", "createdAt", "updatedAt"
) VALUES
    ('Amit', 'Sharma', 'amit.sharma@example.com', '9876543210', '12 MG Road', 'Flat 5A', 'MH', '400001', 'Customer since 2020', true, now(), now()),
    ('Priya', 'Verma', 'priya.verma@example.com', '9123456789', '45 Park Street', NULL, 'WB', '700016', 'VIP customer', true, now(), now()),
    ('Ravi', 'Kumar', 'ravi.kumar@example.com', '9988776655', '22 Residency Road', 'Suite 302', 'KA', '560001', NULL, true, now(), now()),
    ('Neha', 'Singh', 'neha.singh@example.com', '9090909090', '89 Banjara Hills', NULL, 'TS', '500034', 'Preferred customer', true, now(), now()),
    ('Arjun', 'Patel', 'arjun.patel@example.com', '9812345678', '67 Ashram Road', 'Floor 2', 'GJ', '380009', 'New customer', true, now(), now());
