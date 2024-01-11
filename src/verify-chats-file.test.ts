import { expect, test } from 'vitest'
import fs from 'fs'
import path from 'path'

interface Chat {
	id: string;
	chatModel: string;
	lastInteractionTimestamp: string;
	interactions: Interaction[];
 }

 interface Message {
	speaker: string;
	text: string;
	displayText: string;
 }
 
 interface Interaction {
	humanMessage: Message;
	assistantMessage: Message;
	usedContextFiles: string[];
	fullContext: string[];
	usedPreciseContext: string[];
	timestamp: string;
 }
 

test('check if chats.json exists in root and has correct structure', () => {
 const filePath = path.join(__dirname, '..', 'chats.json')
 expect(fs.existsSync(filePath)).toBe(true)

 const fileContent = fs.readFileSync(filePath, 'utf-8')
 const parsedContent: Record<string, Chat> = JSON.parse(fileContent)

 for (const chatId in parsedContent) {
   const chat = parsedContent[chatId]
   expect(typeof chat.id).toBe('string')
   expect(typeof chat.chatModel).toBe('string')
   expect(typeof chat.lastInteractionTimestamp).toBe('string')
   expect(Array.isArray(chat.interactions)).toBe(true)
   for (const interaction of chat.interactions) {
     expect(typeof interaction.humanMessage.speaker).toBe('string')
     expect(typeof interaction.humanMessage.text).toBe('string')
     expect(typeof interaction.humanMessage.displayText).toBe('string')
     expect(typeof interaction.assistantMessage.speaker).toBe('string')
     expect(typeof interaction.assistantMessage.text).toBe('string')
     expect(typeof interaction.assistantMessage.displayText).toBe('string')
     expect(Array.isArray(interaction.usedContextFiles)).toBe(true)
     expect(Array.isArray(interaction.fullContext)).toBe(true)
     expect(Array.isArray(interaction.usedPreciseContext)).toBe(true)
     expect(typeof interaction.timestamp).toBe('string')
   }
 }
})
