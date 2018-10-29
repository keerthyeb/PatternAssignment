#! /bin/bash

set -e

./scripts/run_test.sh ./createDiamond.js ./app_tests_data/inputs/diamond ./app_tests_data/outputs/diamond
./scripts/run_test.sh ./createTriangle.js ./app_tests_data/inputs/triangle ./app_tests_data/outputs/triangle
./scripts/run_test.sh ./createRectangle.js ./app_tests_data/inputs/rectangle ./app_tests_data/outputs/rectangle
