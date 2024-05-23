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
    job:       JobStatus;
}

export interface JobStatus {
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




export interface CreditCard {
    customer: CustomerCredit;
    user:     UserCredit;
}

export interface CustomerCredit {
    object:          string;
    id:              string;
    livemode:        boolean;
    location:        string;
    deleted:         boolean;
    metadata:        Metadata;
    cards:           Cards;
    default_card:    string;
    linked_accounts: Cards;
    description:     null;
    email:           string;
    created_at:      Date;
}

export interface Cards {
    object:   string;
    data:     Datum[];
    limit:    number;
    offset:   number;
    total:    number;
    location: string;
    order:    string;
    from:     Date;
    to:       Date;
}

export interface Datum {
    object:              string;
    id:                  string;
    livemode:            boolean;
    location:            string;
    deleted:             boolean;
    street1:             null;
    street2:             null;
    city:                string;
    state:               null;
    phone_number:        null;
    postal_code:         string;
    country:             string;
    financing:           string;
    bank:                string;
    brand:               string;
    fingerprint:         string;
    first_digits:        null;
    last_digits:         string;
    name:                string;
    expiration_month:    number;
    expiration_year:     number;
    security_code_check: boolean;
    tokenization_method: null;
    created_at:          Date;
}

export interface Metadata {
}

export interface UserCredit {
    wal_id:      string;
    card_number: string;
    user_id:     number;
}






export interface Banking {
    customer: CustomerBanking;
    user:     UserBanking;
}

export interface CustomerBanking {
    object:       string;
    id:           string;
    livemode:     boolean;
    location:     string;
    deleted:      boolean;
    bank_account: BankAccount;
    active:       boolean;
    default:      boolean;
    verified:     boolean;
    description:  null;
    email:        string;
    failure_code: null;
    name:         string;
    tax_id:       null;
    type:         string;
    created_at:   Date;
    schedule:     null;
    metadata:     Metadata;
    verified_at:  null;
    activated_at: null;
}

export interface BankAccount {
    object:         string;
    livemode:       boolean;
    last_digits:    string;
    account_number: string;
    name:           string;
    type:           null;
    created_at:     Date;
    brand:          string;
    bank_code:      string;
    branch_code:    null;
}


export interface UserBanking {
    rep_id:       string;
    user_id:      number;
    brand:        string;
    card_number:  string;
    created_date: Date;
}