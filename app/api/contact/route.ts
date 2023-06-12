import axios from "axios"
import { NextResponse } from "next/server"
import { z } from "zod"

const bodySchema = z.object({
    name:z.string(),
    email:z.string().email(),
    message:z.string()
})

const WEBHOOK_URL = process.env.WEBHOOK_URL!

export async function POST(resquest:Request) {
    try{
        const body = await resquest.json()
        const{name, email, message}=bodySchema.parse(body)

        const messageData= {
            embeds:[
                {
                    "type": "rich",
                    "title": "",
                    "description": "",
                    "color": 0x00FFFF,
                    "fields": [
                      {
                        "name": `Nome`,
                        "value": name,
                      },
                      {
                        "name": `E-mail`,
                        "value": email,
                      },
                      {
                        "name": `Mensagem`,
                        "value": message
                      }
                    ]
                  }
            ]
        }
        await axios.post(WEBHOOK_URL, messageData)
        return NextResponse.json({
            message:'Mensagem enviada com sucesso'
        })
    }catch(err){
        console.log(err)
        return NextResponse.error
    }
}