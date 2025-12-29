// import xlsx 

import EXCEL from 'xlsx'
import fs from 'fs'

// Define Testdata strcuture

interface loginData {
    TestCase : string,
    Username : string,
    Password : string,
    ExpectedResult : string,
    ErrorMessage : string
}

// Create a method to read EXCEL file

export function readExcelLoginData (filePath: string ){
    // Read Excel data as Binary String
    const file = fs.readFileSync(filePath)

    // Parse into Workbook
    const workbook = EXCEL.read(file)

    // Get First Sheet
    const sheet = workbook.Sheets[workbook.SheetNames[0]]

    // Covert sheet into Raw JSON
    const rawData : any[] =EXCEL.utils.sheet_to_json(sheet,{header:1})

    // Convert Raw Data into TestLoginData

    const records : loginData[] = rawData.slice(1).map((column:any)=>({
    TestCase : column[0],
    Username : column[1],
    Password : column[2],
    ExpectedResult : column[3],
    ErrorMessage : column[4]
    }))

    return records
}