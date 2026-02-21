
export const useResumeData = () => {
    const Info = {
        fullName: 'عرفان بهاری',
        jobTitle: 'برنامه نویس',
        summary: 'برنامه نویس باانگیزه و علاقه مند به دنیای فناوری اطلاعات و توسعه نرم افزار، با تمرکز بر طراحی و پیاده سازی سیستم های تحت وب در بخش های Front - End و Back - End. دارای پایه قوی در مفاهیم مهندسی نرم افزار، طراحی رابط کاربری(UI) و تجربه کاربری(UX). در حال تحصیل در مقطع کارشناسی مهندسی کامپیوتر و به دنبال فرصتی برای ورود به تیم های حرفه ای، یادگیری از متخصصان و مشارکت در توسعه محصولات کاربردی و خلاقانه.',
        avatar: '~/assets/img/ErfanBahari.jpg',
        birthday: '1384/6/15',
        placeOfResidence: 'گلستان، بندرگز',
        phone: '09902718796',
        telegram: 'erfanbahari6',
        github: 'Erfan-Bhr',
        gmail: 'erfanbahari6@gmail.com',
    }

    const Education = {
        educationTitle: 'آموزش ها',
        items: [
            {
                id: 1,
                startYear: 1399,
                endYear: 1402,
                university: 'مدرسه مرحوم بشارتی',
                degree: 'دبیرستان نمونه دولتی',
            },
            {
                id: 2,
                startYear: 1402,
                endYear: 1406,
                university: 'دانشگاه صنعتی شاهرود',
                degree: 'کارشناسی مهندسی کامپیوتر',
            },
        ]
    }
    return {
        Info,
        Education,
    }
}