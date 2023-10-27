import Image from 'next/image'
import Wrapper3D from '@/components/wrapper-3d'
import { useEffect, useState } from 'react'
import CodeBlock from '@/components/code-block'
import { fontTitle, fontAlternative } from '@/lib/fonts'

/**
 * Hero section
 * @param {array} tools objects with name and image
 * @returns {jsx}
 */
export default function Hero({ tools }) {

  const [logoHover, setLogoHover] = useState(false)

  function rotateTools() {

    // Calculate rotation
    const rotate = 360 / tools.length

    // Get tools elements
    const toolsWrapper = document.querySelector('.tools')
    const toolsElems = toolsWrapper.querySelectorAll('.tool')

    // Rotate each tool
    toolsElems.forEach((tool, index) => {

      // Move rotation origin to middle of wrapper
      tool.style.transformOrigin = `${toolsWrapper.offsetWidth / 2}px`

      // Rotate
      tool.style.transform = `rotate(${rotate * index}deg)`

      // Rotate inside image
      const img = tool.querySelector('img')
      img.style.transform = `rotate(-${rotate * index}deg)`

      // Gray image
      img.style.filter = 'grayscale(70%)'
    })

  }

  useEffect(() => {

    // Rotate tools when loads and on resize
    window.addEventListener('resize', rotateTools)
    rotateTools()

  }, [tools])

  return (
    <div
      className={`
        hero
        w-full
        flex
        flex-col
        items-center
        justify-center
        pb-20
        relative
        ovwerflow-y-hidden
      `}
    >

      <h1
        className={`
          text-5xl xs:text-6xl sm:text-7xl
          block
          ${fontAlternative.className}
          font-bold
          uppercase
          pt-10
          ${logoHover ? "pb-16 xs:pb-20" : "pb-4"}
          duration-500
          glitch
          ${logoHover ? "glitch-anim" : ""}
        `}
        data-text="Dari Developer"
      >
        Dari Developer
      </h1>

      <Wrapper3D
        id="logo-wrapper"
        className={`
          logo-wrapper
          w-72 xs:w-96
          relative
        `}
      >
        <Image
          src="/imgs/logo.png"
          alt="Dari Dev logo"
          width={500}
          height={500}
          onMouseEnter={() => setLogoHover(true)}
          onMouseLeave={() => setLogoHover(false)}
          className={`
            logo
            rounded-full
            mx-auto
            duartion-500
            w-7/12 xs:w-8/12
            duration-500
            shadow-xl hover:shadow-lg
            shadow-blue-40
          `}
        />

        <div
          className={`
            tools
            absolute
            -z-10
            w-full
            h-full
            top-1/2
            left-1/2
            -translate-x-1/2
            -translate-y-1/2
            mt-14 xs:mt-24
            pt-2
          `}
        >
          {
            tools.map((tool, index) => (
              <div
                className={`
                  tool
                  absolute
                  mr-10
                  flex
                  items-center
                  justify-center
                  w-12
                  h-12
                `}
              >
                <img
                  src={tool.image}
                  alt={tool.name}
                  key={index}
                  className={`
                    w-8 xs:w-12
                    duration-500
                    ${logoHover ? "" : "!translate-x-20"}
                  `}
                />
              </div>
            ))
          }
        </div>

      </Wrapper3D>

      <CodeBlock
        code={`
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
        `}
        className={`
          top-0
          left-0
          opacity-10 md:opacity-40
        `}
        id="code-py"
      />

      <CodeBlock
        code={`
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
        `}
        className={`
          bottom-0
          right-0
          hidden md:inline-block
        `}
        id="code-js"
        reverse={true}

      />

    </div>
  )
}