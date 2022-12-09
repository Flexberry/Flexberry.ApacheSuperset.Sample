docker build --no-cache -f SQL\Dockerfile.PostgreSql -t sampleforsuperset/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t sampleforsuperset/app ../..

docker build --no-cache -f Dockerfile.Superset -t sampleforsuperset/superset ..

docker build --no-cache -f Audit\Dockerfile -t sampleforsuperset/clickhouse ./Audit
