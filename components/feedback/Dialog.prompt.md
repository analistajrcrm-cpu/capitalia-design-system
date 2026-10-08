One decision or one short form — visit booking, reservation confirmation.

```jsx
<Dialog title="Agendar visita" onClose={close} footer={<><Button variant="ghost">Cancelar</Button><Button>Confirmar</Button></>}>
  <p>Te esperamos en la caseta de ventas.</p>
</Dialog>
```

- Scrim is plum at 60%, never black. Content sits on white with a 16px radius.
- Fades in over 240ms; it does not scale or spring.
