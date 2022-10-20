export const toSqlValues = (rowObj: any) => {
    let sqlValuesString = '';
    let columns = [];
    for (const k in rowObj) {
        columns.push(k);
        if (typeof rowObj[k] == 'string') {
            sqlValuesString += `'${rowObj[k]}',`
        } else {
            sqlValuesString += `${rowObj[k]},`
        }
    }

    return {
        sqlValues: sqlValuesString.slice(0, -1),
        columns: columns.map(r => `${r},`).join('').slice(0, -1)
    }
}

export const resolveBackticks = (value: any) => {
    if (typeof value == 'string') {
        return `'${value}'`
    }

    return value
}