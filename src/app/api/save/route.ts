import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Aquí es donde mañana conectaremos con PostgreSQL en CubePath
    console.log("Recibido para guardar:", body);

    return NextResponse.json({ 
      success: true, 
      message: "Proyecto guardado localmente (Simulación)",
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Error al procesar JSON" }, { status: 400 });
  }
}
