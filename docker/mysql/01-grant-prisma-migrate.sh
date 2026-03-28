#!/bin/bash
set -euo pipefail
# Prisma migrate dev creates temporary shadow DBs as the DATABASE_URL user; that user
# needs global DDL rights. Runs only on first MySQL data dir init (empty volume).
mysql -uroot -p"${MYSQL_ROOT_PASSWORD}" <<SQL
GRANT CREATE, ALTER, DROP, REFERENCES ON *.* TO '${MYSQL_USER}'@'%';
FLUSH PRIVILEGES;
SQL
