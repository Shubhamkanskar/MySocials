// app/api/get/route.js
import { NextResponse } from "next/server";
import { currentUser } from "@clerk/nextjs";
import User from "@/models/user";
import mongoose from "mongoose";

export async function GET() {
    try {
        // Get the current user
        const user = await currentUser();

        // If no user is authenticated, return early
        if (!user) {
            return NextResponse.json({ data: null });
        }

        const email = user.emailAddresses[0].emailAddress;

        // Connect to MongoDB
        if (!mongoose.connections[0].readyState) {
            await mongoose.connect(process.env.NEXT_MONGO_URI);
        }

        // Find user data
        const userData = await User.findOne({ email });

        // Always return a valid JSON response
        return NextResponse.json({
            data: userData || null
        });

    } catch (error) {
        console.error('API Error:', error);

        // Return a proper error response
        return NextResponse.json({
            error: "Internal Server Error",
            message: error.message
        }, {
            status: 500
        });
    }
}