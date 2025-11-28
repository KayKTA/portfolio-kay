"use client";

import { Box, Container, Typography, Stack } from "@mui/material";
import { motion } from "framer-motion";
import SlideLayout from "@/components/layout/SlideLayout";
import LinkBtn from "@/components/common/LinkBtn";
import { SimpleChip } from "@/components/ui/RetroChip";

const CV_URL = "/cv.pdf";
const TAGS = ["React", "Next.js", "Node.js", "TypeScript", "Data & IA"];

type HeroProps = {
  onContactClick?: () => void;
};

export default function Hero({ onContactClick }: HeroProps) {
  return (
    <SlideLayout
      title="Kaniba Keita"
      subtitle="Développeuse Fullstack • Data & IA"
    >
      <Container
        maxWidth="lg"
        component={motion.div}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "70vh",
        }}
      >
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 4, md: 6 }}
          sx={{
            alignItems: { xs: "flex-start", md: "stretch" },
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          {/* Intro à gauche */}
          <Stack spacing={3}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: "8vw", md: "3.5vw" },
                fontWeight: 900,
                textTransform: "uppercase",
                lineHeight: 1.1,
                letterSpacing: -1,
              }}
            >
              Je transforme des idées en applications utiles ✨
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "4vw", md: "1.2rem" },
                lineHeight: 1.6,
                fontWeight: 500,
              }}
            >
              Développeuse fullstack JS/TS, j&apos;aime construire des produits
              concrets avec React, Next.js et Node.js. <br />
              J&apos;avance vite, j&apos;apprends en continu et je cherche un
              environnement technique où monter en compétences et évoluer vers du lead.
            </Typography>

            {/* CTA */}
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              sx={{
                mt: 2,
                width: "100%",
              }}
            >
              <Box sx={{ width: { xs: "100%", sm: "auto" } }}>
                <LinkBtn
                  href={CV_URL}
                  label="Télécharger mon CV"
                  variant="primary"
                />
              </Box>
              <Box sx={{ width: { xs: "100%", sm: "auto" } }}>
                <LinkBtn
                  label="Me contacter"
                  variant="outline"
                  onClick={onContactClick}
                />
              </Box>
            </Stack>

            {/* Tags stack avec SimpleChip */}
            <Stack
              direction="row"
              spacing={1}
              flexWrap="wrap"
              sx={{ mt: 2 }}
            >
              {TAGS.map((tag) => (
                <SimpleChip key={tag} item={tag} />
              ))}
            </Stack>
          </Stack>

          {/* Bloc code optionnel commenté */}
        </Stack>
      </Container>
    </SlideLayout>
  );
}
