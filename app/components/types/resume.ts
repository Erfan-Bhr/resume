export type Presentage = Number

export interface Info {
    fullName: string
    jobTitle: string
    summary: string
    avatar: string
    birthday: string
    placeOfResidence: string
    phone: string
    telegram: string
    github: string
    gmail: string
}
export interface EducationItems {
    educations: {
        id: number
        startYear: number
        endYear: number
        university: string
        degree: string
    }
}

export interface Education {
    educationTitle: string
    items: EducationItems[]
}