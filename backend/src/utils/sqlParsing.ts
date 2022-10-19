export const toSqlValues = (rowObj: any) => {
    let sqlValuesString = '';
    for (const k in rowObj) {
        if (typeof rowObj[k] == 'string') {
            sqlValuesString += `'${rowObj[k]}',`
        } else {
            sqlValuesString += `${rowObj[k]},`
        }
    }

    return sqlValuesString.slice(0, -1);
}

export const resolveBackticks = (value: any) => {
    if (typeof value == 'string') {
        return `'${value}'`
    }

    return value
}