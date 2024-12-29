"use client";

import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Facebook, Github, Instagram, Share2, Youtube } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function UserSocials({ userDataName }) {
  const [loading, setLoading] = useState(true);
  const [bio, setBio] = useState("");
  const [insta, setInsta] = useState("");
  const [face, setFace] = useState("");
  const [github, setGithub] = useState("");
  const [youtube, setYoutube] = useState("");
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch("/api/page/get", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username: userDataName }),
        });

        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }

        const { data } = await response.json();

        setLoading(false);
        if (data) {
          setImage(data.image);
          setName(data.name);
          setBio(data.bio);
          setInsta(data.instagram);
          setFace(data.facebook);
          setGithub(data.github);
          setYoutube(data.youtube);
        } else {
          setError(true);
        }
      } catch (err) {
        console.error("Error fetching user data:", err);
        setError(true);
        setLoading(false);
      }
    };

    if (userDataName) {
      fetchUserData();
    }
  }, [userDataName]);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          url: window.location.href,
          title: name,
          text: name,
        });
      } catch (err) {
        console.error("Error sharing:", err);
      }
    }
  };

  if (error) {
    return (
      <div className="grid place-content-center py-20">
        <h1 className="font-bold text-center text-3xl">
          Error Something Went <br /> Wrong
          <span className="text-primary">.</span>
        </h1>
        <p className="text-center text-sm">
          user not found, check the username <br /> and try again.
        </p>
        <Button href="/" className="mt-5 w-full max-w-sm mx-auto">
          Back
        </Button>
      </div>
    );
  }

  return (
    <div className="relative overflow-x-hidden px-6 md:px-20 lg:px-32 py-20 grid place-content-center">
      <div className="absolute top-0 z-[-2] h-screen w-screen dark:bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

      <Button
        onClick={handleShare}
        variant="pulseBtn"
        className="fixed top-5 right-5 md:top-10 md:right-32 w-10 h-10 rounded-full p-0 flex items-center justify-center"
      >
        <Share2 className="w-4 h-4" />
      </Button>

      <div className="grid place-content-center mb-5 mt-14">
        {!image ? (
          <Skeleton className="h-24 w-24 rounded-full" />
        ) : (
          <img
            src={image}
            alt={name}
            className="w-24 h-24 rounded-full bg-background"
          />
        )}
      </div>

      <div className="grid place-content-center mb-14 text-center gap-1 px-2">
        <h1 className="text-3xl font-bold">{name}</h1>
        <p className="text-sm dark:text-gray-400 text-gray-600 max-w-[320px]">
          {bio}
        </p>
        {loading && (
          <>
            <Skeleton className="h-8 w-40 mx-auto" />
            <Skeleton className="h-14 w-[300px] mx-auto" />
          </>
        )}
      </div>

      {loading ? (
        <div className="grid gap-3 max-w-[600px]">
          {[...Array(4)].map((_, i) => (
            <Skeleton key={i} className="h-14 w-[300px] mx-auto" />
          ))}
        </div>
      ) : (
        <div className="grid relative gap-3 grid-cols-1 max-w-[600px]">
          {youtube && (
            <Link
              className="w-full transition md:w-[420px] sm:w-[300px] mx-auto h-14 bg-secondary flex items-center justify-center rounded-lg hover:bg-primary hover:text-white hover:scale-95 relative"
              target="_blank"
              href={youtube}
            >
              <Youtube className="absolute left-6 h-5 w-5" /> My YouTube
            </Link>
          )}
          {insta && (
            <Link
              className="w-full transition md:w-[420px] sm:w-[300px] mx-auto h-14 bg-secondary flex items-center justify-center rounded-lg hover:bg-primary hover:text-white hover:scale-95 relative"
              target="_blank"
              href={insta}
            >
              <Instagram className="absolute left-6 h-5 w-5" /> My Instagram
            </Link>
          )}
          {face && (
            <Link
              className="w-full transition md:w-[420px] sm:w-[300px] mx-auto h-14 bg-secondary flex items-center justify-center rounded-lg hover:bg-primary hover:text-white hover:scale-95 relative"
              target="_blank"
              href={face}
            >
              <Facebook className="absolute left-6 h-5 w-5" /> My Facebook
            </Link>
          )}
          {github && (
            <Link
              className="w-full transition md:w-[420px] sm:w-[300px] mx-auto h-14 bg-secondary flex items-center justify-center rounded-lg hover:bg-primary hover:text-white hover:scale-95 relative"
              target="_blank"
              href={github}
            >
              <Github className="absolute left-6 h-5 w-5" /> My Github
            </Link>
          )}
        </div>
      )}

      <div className="mt-32 grid place-content-center text-center -mb-10">
        <Logo />
        <p className="text-xs">
          Made with ❤️ by{" "}
          <a href="https://github.com/Shubhamkanskar/">Shubham</a>
        </p>
      </div>
    </div>
  );
}
