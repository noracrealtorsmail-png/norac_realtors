import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
    try {
        const featuredListings = await prisma.listing.findMany({
            where: { isFeatured: true },
            take: 6,
            include: {
                agency: true,
                agent: {
                    include: {
                        user: true
                    }
                }
            }
        });

        // Formatting for the frontend if needed
        const formattedListings = featuredListings.map(listing => ({
            id: listing.id,
            title: listing.title,
            price: listing.priceDisplay || `KES ${listing.price.toLocaleString()}`,
            location: listing.location,
            image: JSON.parse(listing.images)[0],
            tag: listing.category,
            beds: listing.beds,
            baths: listing.baths,
            sqft: listing.sqft ? `${listing.sqft.toLocaleString()} sqft` : "N/A",
        }));

        return NextResponse.json(formattedListings);
    } catch (error) {
        console.error("Error fetching featured listings:", error);
        return NextResponse.json({ error: "Failed to fetch listings" }, { status: 500 });
    } finally {
        await prisma.$disconnect();
    }
}
