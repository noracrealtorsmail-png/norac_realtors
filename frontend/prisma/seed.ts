import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    // Create an Admin User
    const admin = await prisma.user.upsert({
        where: { email: "admin@norac.co.ke" },
        update: {},
        create: {
            email: "admin@norac.co.ke",
            name: "Admin User",
            role: "ADMIN",
            password: "hashed_password_here",
        },
    });

    // Create an Agency
    const agency = await prisma.agency.create({
        data: {
            name: "Horizon Estates",
            logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=200",
            coverImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800",
            verified: true,
            rating: 4.9,
            specialization: "Luxury Residential • Westlands",
        },
    });

    // Create an Agent
    const agentUser = await prisma.user.create({
        data: {
            email: "alex@horizon.com",
            name: "Alex Thompson",
            role: "REALTOR",
        },
    });

    const agent = await prisma.agent.create({
        data: {
            userId: agentUser.id,
            agencyId: agency.id,
            role: "Principal Broker",
            experience: "12 Years",
            rating: 4.9,
            specialization: "Muthaiga & Karen",
            verified: true,
        },
    });

    // Create Featured Listings
    const listings = [
        {
            title: "The Glass Mansion",
            description: "An architectural masterpiece set on 1.5 acres of beautifully landscaped gardens in the heart of Muthaiga.",
            price: 185000000,
            priceDisplay: "KES 185,000,000",
            location: "Muthaiga, Nairobi",
            type: "SALE",
            category: "VILLA",
            beds: 6,
            baths: 7,
            sqft: 12000,
            images: JSON.stringify([
                "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1200",
                "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800"
            ]),
            features: JSON.stringify(["Home Cinema", "Private Gym", "Heated Pool", "Smart Home Tech"]),
            isFeatured: true,
            isVerified: true,
            userId: admin.id,
            agentId: agent.id,
            agencyId: agency.id,
        },
        {
            title: "Sky Horizon Penthouse",
            description: "Ultra-modern penthouse offering panoramic views of the Nairobi skyline.",
            price: 45000000,
            priceDisplay: "KES 45,000,000",
            location: "Kileleshwa, Nairobi",
            type: "SALE",
            category: "PENTHOUSE",
            beds: 3,
            baths: 4,
            sqft: 3500,
            images: JSON.stringify([
                "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1200"
            ]),
            features: JSON.stringify(["Panoramic Views", "Concierge", "Rooftop Garden"]),
            isFeatured: true,
            isVerified: true,
            userId: admin.id,
            agentId: agent.id,
            agencyId: agency.id,
        }
    ];

    for (const listing of listings) {
        await prisma.listing.create({
            data: listing,
        });
    }

    console.log("Database seeded successfully!");
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
