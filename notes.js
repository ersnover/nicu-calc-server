import { stringify } from "querystring";
import { INTEGER, STRING, DATE, FLOAT, BOOLEAN } from "sequelize/types";


baby = {
    id: STRING,
    roomNum: STRING,
    birthDate: DATE,
    birthWeight: FLOAT,
    gestAge: INTEGER,
    correctedGestAge: INTEGER,
    lifeDay: INTEGER,
    docId: INTEGER
}

weight = {
    id: STRING,
    babyId: STRING,
    date: DATE,
    deltaDay: FLOAT,
    deltaBirthWeight: FLOAT,
    avg7: FLOAT
}

fluids = {
    id: STRING,
    babyId: STRING,
    date: DATE,
    intake: FLOAT,
    output: FLOAT,
    net: FLOAT,
    uop: FLOAT
}

sugar = {
    id: STRING,
    babyId: STRING,
    date: DATE,
    weight: FLOAT,
    fluidRate: FLOAT,
    dextroseConc: FLOAT,
    gir: FLOAT
}

biliTool = {
    id: STRING,
    babyId: STRING,
    date: DATE,
    birthDate: DATE,
    postnatalAge: INTEGER,
    bilirubin: FLOAT,
    riskLevel: STRING,
    onPhototherapy: BOOLEAN
}

bloodGas = {
    id: STRING,
    babyId: STRING,
    date: DATE,
    pH: FLOAT,
    co2: FLOAT,
    bicarb: FLOAT,
    pao2: FLOAT,
    apm: FLOAT,
    fio2: FLOAT
}