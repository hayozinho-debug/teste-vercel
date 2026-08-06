export default function handler(req, res) {
  res.status(200).json({
    ok: true,
    mensagem: 'Funcionando!',
    time: new Date().toISOString()
  });
}