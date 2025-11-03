import { Button, Container, Typography } from '@mui/material'

export default function Home() {
  return (
    <Container sx={{ py: 8 }}>
      <Typography variant="h3" gutterBottom>Kay – Portfolio</Typography>
      <Button variant="contained">It works 🎉</Button>
    </Container>
  )
}
