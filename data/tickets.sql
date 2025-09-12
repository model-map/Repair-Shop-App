INSERT INTO "Tickets" (
    "customerId", "title", "description", "completed", "tech", "createdAt", "updatedAt"
) VALUES
    (1, 'Laptop not powering on', 'Laptop does not start even when connected to power.', false, 'unassigned', now(), now()),
    (1, 'Slow system performance', 'System running very slowly, requires optimization.', false, 'unassigned', now(), now()),
    (1, 'Virus removal', 'Desktop computer infected with malware, needs cleanup.', false, 'unassigned', now(), now()),
    (2, 'Screen replacement', 'Laptop screen cracked and needs replacement.', false, 'unassigned', now(), now()),
    (2, 'Data recovery', 'Accidentally deleted important documents, needs recovery.', false, 'unassigned', now(), now()),
    (2, 'Software installation', 'Requested installation of Tally and MS Office.', false, 'unassigned', now(), now()),
    (3, 'Wi-Fi connectivity issues', 'Laptop unable to connect to office Wi-Fi.', false, 'unassigned', now(), now()),
    (3, 'Keyboard not working', 'Keyboard keys not responding on Dell laptop.', false, 'unassigned', now(), now()),
    (3, 'Overheating problem', 'System overheating during usage, auto shutdown.', false, 'unassigned', now(), now()),
    (4, 'Hard drive replacement', 'Hard disk failure, requires replacement.', false, 'unassigned', now(), now()),
    (4, 'Operating system upgrade', 'Upgrade required from Windows 10 to Windows 11.', false, 'unassigned', now(), now()),
    (4, 'Battery replacement', 'Laptop battery drained quickly, needs new battery.', false, 'unassigned', now(), now()),
    (5, 'Printer setup', 'Assistance required to install and configure printer.', false, 'unassigned', now(), now()),
    (5, 'Blue screen error', 'System showing frequent BSOD, requires diagnostics.', false, 'unassigned', now(), now()),
    (5, 'Memory upgrade', 'Upgrade requested from 4GB RAM to 8GB RAM.', false, 'unassigned', now(), now());
