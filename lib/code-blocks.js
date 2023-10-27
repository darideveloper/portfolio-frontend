export const codeJs = `
// Elements
const form = document.querySelector("#search-form")
const inputSearch = document.querySelector("#input-search")
const loading = document.querySelector(".loading")
const iframe = document.querySelector("iframe")
const footer = document.querySelector("footer")

// Api data
var headers = new Headers()
headers.append("Content-Type", "application/json")

// Control variables
let isLoading = false
let requestId = 0

function alertError(error) {
  // Debug error
  console.log({ error })

  // Show alert
  Swal.fire({
    title: 'Service error!',
    text: 'The service is not available...'
  })
}

async function apiSendkeyword(keyword) {

  // Query data
  var raw = JSON.stringify({
    "keyword": keyword,
    "api-key": apiKey
  })

  try {

    // Send data to api
    const response = await fetch("./keyword/", {
      method: 'POST',
      headers: headers,
      body: raw,
      redirect: 'follow'
    })

    // Get json from api
    const result = await response.json()

    // Get request id
    requestId = result.data["request-id"]
    console.log({ requestId })

  } catch (error) {
    alertError(error)
  }
}  
`

export const codePy = `
@app.get ('/webhook/')
def webhook_subscribe ():
  """ Webhook for whatsapp """
  
  # Get url&get variables
  hub_mode = request.args.get ('hub.mode', '')
  hub_challenge = request.args.get ('hub.challenge', '')
  hub_verify_token = request.args.get ('hub.verify_token', '')
  
  if hub_mode == "subscribe": 
  
      # Validate token
      if hub_verify_token not in META_TOKENS:
          return ({
              "status": "error",
              "message": "invalid token",
              "data": []
          }, 401)
      
      return hub_challenge
  
  return ({
      "status": "error",
      "message": "invalid request",
      "data": []
  }, 400)

@app.post ('/webhook/')
def message ():
  
  # Get all post data
  data = request.get_json ()
  
  # Detect if is msg or wp message
  source = "wp"
  entry = data["entry"][0]
  if entry.get ("messaging", ""):
      source = "msg"
      
  
  # Default error
  error_response = ({
      "status": "error",
      "message": "invalid request",
      "data": []
  }, 200)
  
  if source == "wp":
      
      # Get message data
      try:
          message_data = entry["changes"][0]["value"]["messages"][0]
          message_phone = message_data["from"]
          message_text = message_data["text"]["body"]
      except Exception as e:
          return error_response
          
      # Fix phone number format
      if message_phone.startswith ("521"):
          message_phone = message_phone.replace ("521", "52")
      
      # Send message
      workflow_thread = Thread (target=workflow)
      workflow_thread.start ()
      
  elif source == "msg":
      
      # Get message data
      try:
          message_data = entry["messaging"][0]
          message_sender = message_data["sender"]["id"]
          message_text = message_data["message"]["text"]
      except Exception as e:
          return error_response
          
      # Send message
      workflow_thread = Thread (target=workflow)
      workflow_thread.start ()        
  
  # Confirm message
  return ("EVENT_RECEIVED", 200)
`