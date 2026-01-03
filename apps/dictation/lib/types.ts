export interface WordPair {
    first: string
    second: string
    firstSentence?: string
    secondSentence?: string
    sentence?: string
    firstAudioUrl?: string
    secondAudioUrl?: string
}

export interface QuizParameters {
    globalTimeLimit: number
    globalLivesLimit: number
    activityTimeLimit: number
    quizModeEnabled: boolean
}

export interface DictationGame {
    _id: string
    _creationTime: number
    userId: string
    title: string
    description?: string
    sourceLanguage: string
    targetLanguage: string
    wordPairs: WordPair[]
    quizParameters: QuizParameters
    isPublic: boolean
    playCount: number
}
