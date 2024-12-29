"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function UserPageLink() {
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/get");

        // Check if the response is ok
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Get the response text first
        const text = await response.text();

        // Check if there's actual content before parsing
        if (!text) {
          console.log("Empty response received");
          return;
        }

        // Parse the JSON
        const data = JSON.parse(text);
        console.log("Fetched data:", data);

        if (data.data?.username) {
          setUsername(data.data.username);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run once on mount

  if (loading) {
    return null; // Or return a loading skeleton
  }

  return (
    <div className="px-6 md:px-20 lg:px-32">
      {!username ? (
        <Alert className="p-3">
          <AlertTitle className="text-sm">
            <span>✨</span> Heads up <span>✨</span>
          </AlertTitle>
          <AlertDescription className="text-xs text-gray-600 dark:text-gray-400">
            Scroll down to publish your page to get your personalized page link!
          </AlertDescription>
        </Alert>
      ) : (
        <Alert className="p-3">
          <AlertTitle className="text-sm">
            <span>✨</span> Your page is ready <span>✨</span>
          </AlertTitle>
          <AlertDescription className="text-xs text-gray-600 dark:text-gray-400">
            <Link
              target="_blank"
              href={`/${username}`}
              className="hover:underline"
            >
              {typeof window !== "undefined"
                ? `${window.location.origin}/${username}`
                : `/${username}`}
            </Link>
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
}
