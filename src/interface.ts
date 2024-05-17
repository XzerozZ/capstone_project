export interface Job {
    job_id:         number;
    title:          string;
    description:    string;
    budget:         number;
    type:           string;
    posted_date:    String;
    submitted_date: String;
    status:         string;
    mass:           number;
    job_exp:        JobExp[];
    categories:     string[];
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