export interface Job {
    job_id:         number;
    title:          string;
    description:    string;
    budget:         number;
    type:           string;
    posted_date:    Date;
    submitted_date: Date;
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
