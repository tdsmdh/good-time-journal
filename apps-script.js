/**
 * Good Time Journal - Google Sheets API Backend
 * Paste this into Extensions > Apps Script in your Google Sheet.
 */

function doGet(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("JournalLogs");
  if (!sheet) return ContentService.createTextOutput("[]").setMimeType(ContentService.MimeType.JSON);
  
  var values = sheet.getDataRange().getValues();
  if (values.length <= 1) return ContentService.createTextOutput("[]").setMimeType(ContentService.MimeType.JSON);
  
  var headers = values[0];
  var logs = [];
  
  // Read backwards to serve newest entries first
  for (var i = values.length - 1; i >= 1; i--) {
    var log = { rowNumber: i + 1 };
    for (var j = 0; j < headers.length; j++) {
      log[headers[j].toString().trim()] = values[i][j];
    }
    logs.push(log);
  }
  return ContentService.createTextOutput(JSON.stringify(logs)).setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("JournalLogs");
    
    // Handle row deletion requests
    if (data.action === "delete") {
      sheet.deleteRow(parseInt(data.rowNumber));
      return ContentService.createTextOutput(JSON.stringify({"status": "deleted"})).setMimeType(ContentService.MimeType.JSON);
    }
    
    // Handle new log entries
    sheet.appendRow([
      data.date, 
      data.rawTime, 
      data.day || "", 
      data.employer, 
      data.header, 
      data.desc, 
      parseInt(data.engagement), 
      parseInt(data.energy), 
      data.flow, 
      data.reflection
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({"status": "success"})).setMimeType(ContentService.MimeType.JSON);
    
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({"error": err.toString()})).setMimeType(ContentService.MimeType.JSON);
  }
}
