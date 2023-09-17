'use client'

import { useRouter, useSearchParams } from "next/navigation";
import {useEffect, useState} from 'react';
import Cookie from 'js-cookie';

export default function Redirect() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const jwttoken = searchParams.get("token")!;
    useEffect (() => {
      const redirectdashboard = async () => {
        Cookie.set('token', jwttoken);
        router.push('/dashboard');
      }
      redirectdashboard();
    }, [jwttoken, router]);

  return (
    <main>
      You are being redirected...
    </main>
  );
}
