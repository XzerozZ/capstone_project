export interface Job {
    job_id:         number;
    title:          string;
    description:    string;
    budget:         number;
    type:           string;
    posted_date:    string;
    submitted_date: string;
    status:         string;
    mass:           number;
    job_exp:        JobExp[];
    post:           Post[];
    categories:     string[];
    company:        string[];
}

export interface JobExp {
    job_id:      number;
    category_id: number;
    category:    Category;
}

export interface Category {
    category_id: number;
    name:        string;
}

export interface Post {
    job_id:  number;
    user_id: number;
    user:    User;
}

export interface User {
    user_id:      number;
    first_name:   string;
    last_name:    string;
    username:     string;
    image:        string;
    phone_number: string;
    id_card:      string;
    email:        string;
    password:     string;
    role:         string;
}


export interface User {
    user_id:         number;
    first_name:      string;
    last_name:       string;
    username:        string;
    image:           string;
    phone_number:    string;
    id_card:         string;
    email:           string;
    password:        string;
    role:            string;
    rating_users2:   any[];
    rating_com2:     any[];
    contact:         Contact[];
    experience:      Experience[];
    user_career:     UserCareer[];
    categories:      string[];
    careers:         string[];
    averageRating_f: number;
    averageRating_e: number;
    averageRating_a: number;
    averageRating:   number;
}

export interface Contact {
    contact_id: number;
    user_id:    number;
    facebook:   string;
    instagram:  string;
    linkedin:   string;
}

export interface Experience {
    user_id:     number;
    category_id: number;
    category:    Category;
}

export interface Category {
    category_id: number;
    name:        string;
}

export interface UserCareer {
    user_id:   number;
    career_id: number;
    career:    Career;
}

export interface Career {
    career_id: number;
    name:      string;
}



export interface History {
    user_id: number;
    job_id:  number;
    status:  string;
    user:    User;
    job:     JobHis;
}

export interface JobHis {
    job_id:         number;
    title:          string;
    description:    string;
    budget:         number;
    type:           string;
    posted_date:    Date;
    submitted_date: Date;
    status:         string;
    mass:           number;
}

export interface Category {
    category_id: number;
    name:        string;
}



export interface UserProfile {
    user_id:         number;
    first_name:      string;
    last_name:       string;
    username:        string;
    image:           string;
    phone_number:    string;
    id_card:         string;
    email:           string;
    password:        string;
    role:            string;
    rating_users2:   any[];
    rating_com2:     any[];
    contact:         Contact[];
    experience:      any[];
    user_career:     UserCareer[];
    categories:      any[];
    careers:         string[];
    averageRating_f: number;
    averageRating_e: number;
    averageRating_a: number;
    averageRating:   number;
}

export interface Contact {
    contact_id: number;
    user_id:    number;
    facebook:   string;
    instagram:  string;
    linkedin:   string;
}

export interface UserCareer {
    user_id:   number;
    career_id: number;
    career:    Career;
}

export interface Career {
    career_id: number;
    name:      string;
}


export interface StatusWork {
    job_id:    number;
    user_id:   number;
    work_link: string;
    job:       Job;
}

export interface Job {
    history: History2[];
}

export interface History2 {
    status: string;
    user:   User2;
}

export interface User2 {
    user_id:      number;
    first_name:   string;
    last_name:    string;
    username:     string;
    image:        string;
    phone_number: string;
    id_card:      string;
    email:        string;
    password:     string;
    role:         string;
}