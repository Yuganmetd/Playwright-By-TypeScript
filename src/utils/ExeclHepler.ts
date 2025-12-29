// import xlsx

import EXCEL from 'xlsx'
import fs from 'fs'

// Define TestData Strcuture

interface TestRecord {
    Skill1 : string,
    Skill2 : string
}

// Create method to read excel file

export function readExeclFile(filePath:string){
    // Read Execl file as Binary Dtring
    const file = fs.readFileSync(filePath)

    // Parse into Workbook
    const workbook = EXCEL.read(file)

    // Get First Sheet
    const sheet = workbook.Sheets[workbook.SheetNames[0]]

    // Convert sheet into Json
    const rawData : any[] =EXCEL.utils.sheet_to_json(sheet,{header : 1})

    // Convert raw data into TestRecord
    const records : TestRecord[] = rawData.slice(1).map((column:any)=>({
        Skill1 : column[0],
        Skill2 : column[1]
    }))

     return records
}