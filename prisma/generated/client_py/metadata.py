from __future__ import annotations
# -*- coding: utf-8 -*-
# code generated by Prisma. DO NOT EDIT.
# fmt: off
# -- template metadata.py.jinja --


PRISMA_MODELS: set[str] = {
    'user',
    'rating_user',
    'rating_com',
    'contact',
    'category',
    'experience',
    'career',
    'user_career',
    'job',
    'history',
    'job_exp',
    'bookmark',
    'post',
}

RELATIONAL_FIELD_MAPPINGS: dict[str, dict[str, str]] = {
    'user': {
        'post': 'post',
        'rating_user1': 'rating_user',
        'rating_users2': 'rating_user',
        'rating_com1': 'rating_com',
        'rating_com2': 'rating_com',
        'contact': 'contact',
        'experience': 'experience',
        'user_career': 'user_career',
        'history': 'history',
        'bookmark': 'bookmark',
    },
    'rating_user': {
        'user1': 'user',
        'user2': 'user',
        'job': 'job',
    },
    'rating_com': {
        'user1': 'user',
        'user2': 'user',
        'job': 'job',
    },
    'contact': {
        'user': 'user',
    },
    'category': {
        'experiences': 'experience',
        'job_exp': 'job_exp',
    },
    'experience': {
        'user': 'user',
        'category': 'category',
    },
    'career': {
        'user_career': 'user_career',
    },
    'user_career': {
        'user': 'user',
        'career': 'career',
    },
    'job': {
        'history': 'history',
        'job_exp': 'job_exp',
        'rating_user': 'rating_user',
        'rating_com': 'rating_com',
        'bookmark': 'bookmark',
        'post': 'post',
    },
    'history': {
        'user': 'user',
        'job': 'job',
    },
    'job_exp': {
        'job': 'job',
        'category': 'category',
    },
    'bookmark': {
        'user': 'user',
        'job': 'job',
    },
    'post': {
        'user': 'user',
        'job': 'job',
    },
}

# fmt: on