'use client';
import {useTranslations} from 'next-intl';
import keys from '@/messages/keys.json';
export function useCopy(){const translate=useTranslations();return (source:string)=>{const key=(keys as Record<string,string>)[source];return key?translate(key):source;};}
